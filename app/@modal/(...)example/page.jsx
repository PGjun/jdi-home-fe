"use client";

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <Modal>
      <div onClick={() => router.back()}>X</div>
      <h1>contact</h1>
    </Modal>
  );
}

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-slate-500 bg-opacity-75 z-50 flex items-center justify-center">
      {children}
    </div>
  );
};
