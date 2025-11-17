// Validation utilities
export const validate = {
  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone) => {
    const phoneRegex = /^(\+94|0)[0-9]{9}$/;
    return phoneRegex.test(phone);
  },

  date: (date) => {
    return date instanceof Date && !isNaN(date);
  },

  price: (price) => {
    return typeof price === 'number' && price > 0;
  },
};

// Formatting utilities
export const format = {
  currency: (amount) => {
    return `₨${amount.toLocaleString('en-US')}`;
  },

  date: (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  },

  time: (time) => {
    return new Date(time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  },

  rating: (rating) => {
    return rating.toFixed(1);
  },
};

export default { validate, format };
