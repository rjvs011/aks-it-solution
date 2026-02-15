"use client";

import { useState, useEffect } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setUserReviews(data);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, text }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setUserReviews((prev) => [data.review, ...prev]);
      setName("");
      setRating(5);
      setText("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Failed to submit review. Please try again.");
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Submit Review Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We value your feedback! Let us know how your experience was
              working with us.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="review-name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-3xl transition-transform hover:scale-110 focus:outline-none"
                    >
                      <i
                        className={`fas fa-star ${
                          star <= (hoverRating || rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-lg font-semibold text-gray-700">
                    {hoverRating || rating}/5
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label
                  htmlFor="review-text"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="review-text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  minLength={10}
                  rows={4}
                  placeholder="Tell us about your experience (minimum 10 characters)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                />
              </div>

              {/* Status Message */}
              {message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    status === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  <i
                    className={`fas ${
                      status === "success"
                        ? "fa-check-circle"
                        : "fa-exclamation-circle"
                    } mr-2`}
                  />
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-3.5 rounded-lg font-semibold hover:shadow-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2" />
                    Submit Review
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* User Submitted Reviews */}
      {userReviews.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Reviews
              </h2>
              <p className="text-gray-600 text-lg">
                Reviews submitted by our clients
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userReviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < r.rating ? "text-yellow-400" : "text-gray-300"
                          }${i > 0 ? " ml-1" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      {formatDate(r.date)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${r.color}-500 to-${r.color}-700 rounded-full flex items-center justify-center text-white font-bold mr-3`}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{r.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
