<template>
<div class="contact wrapper">
  <div class="contactDes">{{ $t('contactDes') }}</div>
  <h2>{{ $t('contactTitle') }}</h2>

  <div class="contactSkills">
    <div class="subTitle contactBlockTitle">{{ $t('contactSkillTitle') }}</div>
    <p>{{ $t('contactSkills') }}</p>
    <p>{{ $t('contactLearning') }}</p>
  </div>

  <div class="contactInfos">
    <div class="subTitle contactBlockTitle">{{ $t('contactInfoTitle') }}</div>
    <div class="contactInfo">{{ $t('contactEmail') }}</div>
    <div class="contactInfo">{{ $t('contactPhone') }}</div>
  </div>

  <div class="contactSocialBar">
    <a v-for="item in socials" :key="item.id" :href="item.link" target="_blank">
      <Icon :name="item.icon" color="black" />
    </a>
  </div>

  <div class="copyright">{{ $t('footerDes') }}</div>
</div>
</template>

<script setup>
const socials = [
  {
    link: 'https://github.com/livoist',
    icon: 'uil:github'
  },
  {
    link: 'https://www.instagram.com/waterblue104/',
    icon: 'uil:instagram'
  },
  {
    link: 'https://medium.com/@waterblue104',
    icon: 'fa-brands:medium'
  },
  {
    link: 'https://www.linkedin.com/in/ben-lai-21906b109/',
    icon: 'uil:linkedin'
  }
]
</script>
