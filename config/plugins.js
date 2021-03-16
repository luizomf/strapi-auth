module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  email: {
    provider: 'smtp',
    providerOptions: {
      host: env('SMTP_HOST'), //SMTP Host
      port: env.int('SMTP_PORT'), //SMTP Port
      secure: true,
      username: env('SMTP_USERNAME'),
      password: env('SMTP_PASSWORD'),
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: env('SMTP_FROM'),
      replyTo: env('SMTP_REPLY_TO'),
    },
  },
});
