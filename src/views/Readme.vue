<template>
  <!-- readme -->
  <div class="readme">
    <div class="card-header">
      <svg
        class="octicon octicon-book"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
        ></path>
      </svg>
      <h3>
        README.md
      </h3>
    </div>
    <div class="markdown-body" v-html="readme"></div>
  </div>
</template>

<script>
import { getReadme } from '../API/api'
export default {
  name: 'Readme',
  data() {
    return {
      readme: ''
    }
  },
  created() {
    getReadme(this.baseURL).then(res => {
      this.readme = res.data
      // console.log(this.readme)
    })
  }
}
</script>

<style>
h3 {
  font-size: 1em;
}
code,
pre,
tt {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 12px;
}
.readme {
  color: #24292e;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
}
.markdown-body {
  padding: 32px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.markdown-body h1 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  font-size: 2em;
  margin: 24px 0 16px 0;
  font-weight: 600;
  line-height: 1.25;
}
.markdown-body h1:first-child {
  margin-top: 0;
}
.markdown-body h2 {
  font-size: 1.5em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
.markdown-body h3 {
  font-size: 1em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 600;
  line-height: 1.25;
}
.markdown-body p {
  margin-top: 0;
  margin-bottom: 16px;
}
.markdown-body ul {
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 16px;
}
.markdown-body li + li {
  margin-top: 0.25em;
}
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
  word-wrap: normal;
}
.markdown-body pre code {
  display: inline;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: initial;
  border: 0;
}
.markdown-body pre > code {
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
}
.markdown-body code {
  border-radius: 3px;
}
.card-header {
  padding: 8px 0;
  margin: -1px -1px 0;
  background-color: #f7f7f9;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
  align-items: center;
}
.card-header svg {
  margin-left: 10px;
}
.card-header h3 {
  padding-left: 5px;
  font-weight: 600;
}
</style>
