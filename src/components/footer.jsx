import React, { useState } from 'react';
import { Send, Mail, User, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import Title from './title';
import Hr from './hr';

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await emailjs.send(
                'service_x1d5vsv',
                'template_rl5e889',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.comment
                },
                'Tpwv9fk6D2u3dxBG0'
            );

            setSubmitted(true);
            setFormData({ name: '', email: '', comment: '' });

            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error('Erro ao enviar:', err);
            setError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }

        setIsSubmitting(false);
    };

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.comment.trim();

    if (submitted) {
        return (
            <footer className="bg-transparent text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 backdrop-blur-sm">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-slate-300">
                            Thank you for reaching out. I'll get back to you soon.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer
            id="contact"
            className="min-h-dvh bg-[linear-gradient(to_right,var(--purple-dark-dark),black,var(--purple-dark-dark)),url('https://www.transparenttextures.com/patterns/lined-paper-2.png')] bg-repeat bg-center text-white py-16 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

            <div className="max-w-4xl mx-auto px-6 relative pt-15">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Have a question or want to work together? I'd love to hear from you.
                        Send me a message and I'll respond as soon as possible.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="relative group">
                            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                <MessageCircle className="h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors mt-0.5" />
                            </div>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                                rows={5}
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 hover:bg-white/10 resize-none"
                                placeholder="Tell me about your project, ask a question, or just say hello..."
                                required
                            />
                        </div>

                        {/* Error message */}
                        {error && (
                            <p className="text-red-400 text-center">{error}</p>
                        )}

                        {/* Submit button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="cursor-pointer group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <span className="flex items-center gap-3">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 w-full justify-center mt-15 pt-5 border-t border-white/10">
                </div>

                {/* Footer bottom */}
                <div className="mt-0 text-center text-slate-400 pt-8">
                    <p>&copy; 2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
