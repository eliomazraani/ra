<template>
  <!-- Contact -->
  <section :class="['contact', color]">
    <div class="wrap">
      <div class="left">
        <div class="getInTouch">Get In Touch</div>
        <div class="description">
          We're enthusiastic about introducing our services at Rachel Asmar. Our commitment is to
          deliver the best possible customer experience. <br />
          Whether you're curious to learn more or have questions, we're here to assist. Take a look
          at our website for details or contact us for further help. Thank you for considering us!
        </div>
        <div class="reachOut">
          <div class="address link">
            <img :src="getImagePath('Location')" alt="Img" />
            <div @click="openGoogleMaps()">RA | The Hub, Beirut, Lebanon</div>
          </div>
          <div class="number link">
            <img :src="getImagePath('Phone')" alt="Img" />
            <div @click="openWhatsApp()">961 70908587</div>
          </div>
          <div class="email link">
            <img :src="getImagePath('Email')" alt="Img" />
            <div @click="openEmail()">Info@rachelasmar.com</div>
          </div>
        </div>
      </div>
      <div class="right">
        <form action="" class="form" id="contactForm">
          <div class="row">
            <input
              type="text"
              id="firstName"
              :class="[{ error: submit && firstName == '' }]"
              v-model="firstName"
              placeholder="First Name*"
              required
            />
            <input
              type="text"
              id="lastName"
              :class="[{ error: submit && lastName == '' }]"
              v-model="lastName"
              placeholder="Last Name*"
              required
            />
          </div>
          <div class="row">
            <input
              type="phone"
              id="phoneNumber"
              :class="[{ error: submit && phone == '' }]"
              v-model="phone"
              placeholder="Phone Number*"
              required
            />
            <input
              type="email"
              id="email"
              :class="[{ error: submit && email == '' }]"
              v-model="email"
              placeholder="Email*"
              required
            />
          </div>
          <div class="row">
            <textarea
              name=""
              id="message"
              :class="[{ error: submit && message == '' }]"
              v-model="message"
              cols="30"
              rows="10"
              placeholder="Message*"
              required
            ></textarea>
          </div>
          <div class="row">
            <div id="sendEmail" @click="sendEmail()" :class="['button', { disabled: disabledBtn }]">
              <a>Submit</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
      devEmail: 'eliomazraani97@hotmail.com',
      prodEmail: 'info@rachelasmar.com',
      disabledBtn: false,
      submit: false,
    }
  },
  computed: {
    color() {
      const path = this.$route.path
      const ctg = this.$route.query.ctg

      if (path === '/choreography' || ctg === 'choreography') return 'green'
      if (path === '/design' || ctg === 'design') return 'pink'
      if (path === '/art' || ctg === 'art') return 'purple'
      if (path === '/coaching') return 'peach'
      return ''
    },
  },
  mounted() {
    emailjs.init('4uIfK9PIMmhm3l7HF')

    window.contactVue = this
  },
  methods: {
    getImagePath(icon) {
      return new URL(`../assets/img/${icon}.svg`, import.meta.url).href
    },
    openGoogleMaps() {
      var mapsUrl = 'https://maps.app.goo.gl/TuJwvJCoFnzyVtXj8'

      window.open(mapsUrl, '_blank')
    },
    openWhatsApp() {
      var phoneNumber = '96170908587'
      // var message = "Hello!";

      var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' //+ encodeURIComponent(message);

      window.open(whatsappUrl, '_blank')
    },
    openEmail() {
      var emailAddress = 'info@rachelasmar.com'
      // var subject = "Subject of the email";
      // var body = "Body of the email";

      var mailtoUrl = 'mailto:' + emailAddress
      // + "?subject=" + encodeURIComponent(subject)
      // + "&body=" + encodeURIComponent(body);

      window.location.href = mailtoUrl
    },
    sendEmail(testing = false) {
      this.disabledBtn = true
      this.submit = true

      if (
        this.firstName === '' ||
        this.lastName === '' ||
        this.phone === '' ||
        this.email === '' ||
        this.message === ''
      ) {
        alert('Please fill in all the required fields.')
        this.disabledBtn = false
        return
      }

      var templateParams = {
        to_email: testing ? this.devEmail : this.prodEmail,
        from_name: testing ? 'Test name' : this.firstName + ' ' + this.lastName,
        phone_number: testing ? 'Test number' : this.phone,
        email: testing ? 'Test email' : this.email,
        message: testing ? 'Test message' : this.message,
      }

      emailjs
        .send('service_op2jm29', 'template_4hd3fvm', templateParams)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text)
          var thankYou = $('.thanks')
          thankYou.addClass('open')
          this.firstName === ''
          this.lastName === ''
          this.phone === ''
          this.email === ''
          this.message === ''
          this.disabledBtn = false
          this.submit = false
        })
        .catch((error) => {
          console.log('Email sending failed!', error)
          this.disabledBtn = false
          this.submit = false
        })
    },
  },
}
</script>
