<template>
  <!-- Jobs -->
  <section class="jobs">
    <div class="vacancy">
      <div class="wrap">
        <div class="title">Join Our Team</div>
        <div class="description">
          We are thrilled to have you here and we appreciate your interest in becoming a part of our
          team. We strive to create an inclusive and collaborative work environment where everyone's
          unique skills and perspectives are valued. We are always looking for talented individuals
          who are passionate and who are committed to delivering exceptional results.
        </div>
        <div class="hiring">
          <img :src="getImagePath('Hiring.jpg')" alt="Img" />
        </div>
        <div class="jobList">
          <div v-for="vacancy in jobs" class="jobPosition">
            <div class="image">
              <img :src="vacancy.image" alt="Img" />
            </div>
            <div class="details">
              <div class="position">{{ vacancy.position }}</div>
              <div class="requirements">{{ vacancy.requirements }}</div>
              <div @click="applyNow(vacancy.position)" class="button">
                <a>{{ vacancy.description ? 'View Description' : 'Apply Now' }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { jobs } from '../assets/js/data'

export default {
  data() {
    return {
      jobs: jobs,
    }
  },
  methods: {
    getImagePath(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
    },
    applyNow(position) {
      var emailAddress = 'info@rachelasmar.com'
      var subject = `New Job Application - ${position}`
      var body = `*Please attach your resume, videos, and photos and complete the information below*
                
Phone: 
Height: 
Instagram: `

      var mailtoUrl =
        'mailto:' +
        emailAddress +
        '?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body)

      window.location.href = mailtoUrl
    },
  },
}
</script>
