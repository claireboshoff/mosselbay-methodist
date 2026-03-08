// Site Configuration — Mossel Bay Methodist Church
const SITE_CONFIG = {
  name: 'Mossel Bay Methodist Church',
  shortName: 'MB Methodist',
  tagline: 'Proclaiming the Gospel of Jesus Christ for Healing and Transformation',
  domain: 'mosselbaymethodist.co.za',

  // Contact
  email: 'admin@mosselbaymethodist.co.za',
  phone: '+27 44 691 2376',
  whatsapp: '27660755010',

  // Address
  address: 'Queen Street, Mossel Bay, 6510',
  postalAddress: 'PO Box 393, Mossel Bay, 6500',

  // Service times
  services: [
    { day: 'Sunday', time: '09:00', name: 'Morning Worship' }
  ],

  // Office hours
  officeHours: 'Tuesday - Thursday, 09:00 - 13:00',

  // Social
  social: {
    facebook: 'https://www.facebook.com/mosselbaymethodist/',
    youtube: 'https://www.youtube.com/@mosselbaymethodistchurch5363',
    soundcloud: 'https://soundcloud.com/mosselbaymethodist'
  },

  // Map
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d22.146934!3d-34.183947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDExJzAyLjIiUyAyMsKwMDgnNDkuMCJF!5e0!3m2!1sen!2sza!4v1',

  // Forms — webhook URL (set when n8n is configured)
  webhooks: {
    contact: '',
    prayer: ''
  },

  // Analytics (set when GA4 is configured)
  gaId: ''
};
