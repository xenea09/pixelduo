import { useState, useRef } from 'react';
import './FaqItem.css';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(o => !o)}>
        <span>{question}</span>
        <span className="faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      <div
        ref={bodyRef}
        className="faq-item__body"
        style={{
          height: open ? bodyRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <p className="faq-item__answer">{answer}</p>
      </div>
    </div>
  );
}
