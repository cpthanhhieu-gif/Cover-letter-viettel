"use client";

export function BackToTop() {
  return (
    <button
      className="bottom-nav__top"
      type="button"
      aria-label="Quay về đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
