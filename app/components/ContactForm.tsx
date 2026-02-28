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

            if (!res.ok) throw new Error("Failed");

            setSuccess(true);
            form.reset();
            setTimeout(() => setSuccess(false), 4000);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 space-y-6"
        >
            <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full p-4 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                    loading
                        ? "bg-indigo-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 shadow-lg"
                }`}
            >
                {loading ? "Sending..." : "Start a Conversation"}
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