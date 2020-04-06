<template>
  <div class="funding-box">
    <p class="funding-title">{{ $options.static.title }}</p>
    <p class="funding-body">{{ $options.static.body }}</p>
  </div>
</template>

<script>
export default {
  static: {
    title: "Notice of Federal Funding and Federal Disclaimer",
    body:
      "This Web site is funded through a grant from the Bureau of Justice \
Statistics, Office of Justice Programs, U.S. Department of Justice. \
Neither the U.S. Department of Justice nor any of its components operate, \
control, are responsible for, or necessarily endorse, this Web site \
(including, without limitation, its content, technical infrastructure, \
and policies, and any services or tools provided)."
  }
};
</script>

<style scoped>
.funding-box {
  color: rgba(0, 0, 0, 0.66);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 720px;
  padding-top: 32px;
}
.funding-title {
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
}
.funding-body {
  font-size: 0.8em;
  font-style: italic;
}
</style>
