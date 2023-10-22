  <div class="cursor"></div>
  <script>
    let cursor = document.querySelector(".cursor")
    const x_center = cursor.offsetWidth / 2
    const y_center = cursor.offsetWidth / 2

    document.body.addEventListener("mousemove", function (e) {
      cursor.style.left = `${e.x - x_center}px`
      cursor.style.left = `${e.y - y_center}px`
    })

    const link = document.querySelectorAll('a');
    link.forEach(link => {
      link.addEventListener('mouseenter', function (e) {
        cursor.classList.remove("unactive")
        cursor.classList.add("active")

      })

      link.addEventListener('mouseleave', function (e) {
        cursor.classList.remove("active")
        cursor.classList.add("unactive")
      })