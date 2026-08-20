"use client";

import { useEffect, useRef, useState } from "react";

export function ViettelInsightModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="viettel-insight-link" type="button" onClick={() => setOpen(true)}>
        Viettel Digital
      </button>

      {open && (
        <div className="insight-modal" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="insight-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="insight-dialog__header">
              <span>VIETTEL DIGITAL · PRODUCT PERSPECTIVE</span>
              <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)} aria-label="Đóng popup">
                ×
              </button>
            </header>

            <div className="insight-dialog__content">
              <h2 id="insight-title">Vì sao em muốn xây sản phẩm tài chính hiểu người dùng</h2>

              <h3>Bối cảnh chiến lược</h3>
              <p>Khi một hệ sinh thái tài chính số như Viettel Money mở rộng quy mô — từ ví thanh toán đơn thuần sang đa dịch vụ (chuyển tiền, thanh toán, tiết kiệm, đầu tư, tín dụng, merchant tools) — bài toán &quot;quá nhiều dịch vụ, quá nhiều loại người dùng&quot; không còn là vấn đề UX cục bộ, mà trở thành vấn đề tất yếu của giai đoạn mở rộng business. Đây là quy luật chung của mọi nền tảng số khi tăng trưởng: số lượng tính năng và thông tin tăng nhanh hơn khả năng một giao diện tĩnh có thể trình bày hợp lý cho tất cả mọi người.</p>

              <h3>Bản chất vấn đề</h3>
              <p>Gốc rễ không nằm ở việc thiếu tính năng, mà ở việc không có cơ chế quyết định — hệ thống chưa biết nên ưu tiên hiển thị gì (What), cho ai (Who), và vào lúc nào (When). Khi thiếu cơ chế này, toàn bộ gánh nặng khám phá bị đẩy về phía người dùng, dẫn đến hệ quả kép: user có nhu cầu thật không tìm thấy đúng công cụ, còn các sản phẩm giá trị cao (savings, đầu tư) bị chìm và không được kích hoạt đúng tiềm năng.</p>

              <h3>Vì sao đây là điều kiện cần, không phải &quot;nice-to-have&quot;</h3>
              <p>Trong thời đại số, khi mật độ thông tin và số lượng dịch vụ tích hợp trong một hệ sinh thái ngày càng dày đặc, khả năng điều phối thông minh (không phải chỉ tích hợp nhiều tính năng) mới là yếu tố quyết định một nền tảng có tiếp tục mở rộng được hay không. Một hệ sinh thái càng lớn mà không có lớp điều phối cá nhân hóa sẽ tự triệt tiêu giá trị của chính sự mở rộng đó — vì user không thể tận dụng hết những gì nền tảng cung cấp. Do đó, giải được bài toán personalization homepage không chỉ là cải thiện trải nghiệm, mà là gỡ nút thắt cho toàn bộ chiến lược mở rộng dịch vụ của Viettel Money về sau.</p>

              <h3>Định vị cá nhân</h3>
              <p>Đây là loại bài toán em thấy hứng thú nhất — không phải vì nó là một case thiết kế đẹp, mà vì nó nằm ở đúng giao điểm giữa product thinking, data, và chiến lược kinh doanh dài hạn. Em mong muốn được cùng đội ngũ Viettel Digital giải quyết những bài toán ở tầm hệ thống như thế này.</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
