import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border border-neutral-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1 mb-1">
            <span className="text-3xl font-black text-neutral-950 font-sans">IKA</span>
            <span className="text-3xl font-black text-white bg-neutral-950 px-2 py-0.5 rounded-md transform -skew-x-6">4</span>
          </div>
          <h3 className="text-xl font-black uppercase text-neutral-950 font-sans tracking-tight">
            Welcome to IKA4
          </h3>
          <p className="text-xs text-neutral-500">
            Sign in to access order history, saved favorites, and member drops.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-6 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-neutral-950">Logged In Successfully!</h4>
            <p className="text-xs text-neutral-500">Welcome back, {email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-100 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-md"
            >
              Continue with Email
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
