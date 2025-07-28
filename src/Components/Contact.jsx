import React from 'react';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-6">
      <h1 className="my-20 text-center text-4xl">Get In Touch</h1>

      <div className="text-center tracking-tight text-neutral-500 space-y-4">
        {/* Phone with WhatsApp link */}
        <p>
          <strong className='text-white'>Phone:</strong>{' '}
          <a
            href="https://wa.me/923109783063"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            +92 310 9783063
          </a>
        </p>

        {/* Email link */}
        <p>
          <strong className='text-white'>Email:</strong>{' '}
          <a
            href="mailto:abasit3110@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            abasit3110@gmail.com
          </a>
        </p>

        {/* Location text */}
        <p>
          <strong className='text-white'>Location:</strong> Peshawar, Pakistan
        </p>
      </div>

      {/* Embedded Map */}
      {/* <div className="mt-10 flex justify-center">
        <iframe
          title="Peshawar Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424345.9014351445!2d71.3881073177205!3d34.0123842685468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93d77662ab4d3%3A0x20239a62cb5ff7aa!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1629293260471!5m2!1sen!2s"
          width="100%"
          height="350"
          className="rounded-lg border-0 shadow-lg max-w-2xl w-[500px] h-[250px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
