"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            }),
        });

        setLoading(false);

        if (res.ok) {
            setSuccess(true);
            form.reset();
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6 text-left"
        >
            <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-4 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full p-4 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 py-3 rounded-lg hover:bg-indigo-500 transition"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
                <p className="text-green-400 text-center">
                    Message sent successfully!
                </p>
            )}
        </form>
    );
}