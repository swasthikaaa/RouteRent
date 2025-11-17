// API service for backend communication
// Replace with real API endpoints

export const apiClient = {
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000',

  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  },

  // Vehicle endpoints
  vehicles: {
    getAll: () => this.request('/vehicles'),
    getById: (id) => this.request(`/vehicles/${id}`),
    search: (params) => this.request('/vehicles/search', { body: JSON.stringify(params) }),
  },

  // Booking endpoints
  bookings: {
    create: (bookingData) =>
      this.request('/bookings', {
        method: 'POST',
        body: JSON.stringify(bookingData),
      }),
    getAll: () => this.request('/bookings'),
    getById: (id) => this.request(`/bookings/${id}`),
  },

  // User endpoints
  users: {
    getProfile: () => this.request('/users/profile'),
    updateProfile: (userData) =>
      this.request('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(userData),
      }),
  },
};

export default apiClient;
