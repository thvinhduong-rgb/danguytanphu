<script>
fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=demo")
  .then(res => res.json())
  .then(data => {
    console.log(data.articles);
  });
</script>
