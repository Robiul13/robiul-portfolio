"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setSuccess(true);
            form.reset();

            // auto-hide success after 4 seconds
            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
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
                className={`w-full py-3 rounded-lg transition ${
                    loading
                        ? "bg-indigo-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-500"
                }`}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
                <p className="text-green-400 text-center font-medium">
                    ✅ Message sent successfully!
                </p>
            )}

            {error && (
                <p className="text-red-400 text-center font-medium">
                    ❌ {error}
                </p>
            )}
        </form>
    );
}