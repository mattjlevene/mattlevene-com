// =========================================
// SCROLL REVEAL
// =========================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.reveal, .reveal-hero').forEach(el => {
  revealObserver.observe(el)
})

// =========================================
// NAV SCROLL EFFECT
// =========================================
const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50)
}, { passive: true })

// =========================================
// MOBILE NAV
// =========================================
const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')

// Create overlay
const overlay = document.createElement('div')
overlay.className = 'nav-overlay'
overlay.innerHTML = '<ul>' + navLinks.innerHTML + '</ul>'
document.body.appendChild(overlay)

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('open')
  overlay.classList.toggle('open', isOpen)
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

overlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open')
    overlay.classList.remove('open')
    document.body.style.overflow = ''
  })
})

// =========================================
// PILLAR EXPAND/COLLAPSE
// =========================================
document.querySelectorAll('.pillar-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling
    const isOpen = btn.getAttribute('aria-expanded') === 'true'

    if (isOpen) {
      detail.style.maxHeight = '0px'
      detail.classList.remove('open')
      btn.setAttribute('aria-expanded', 'false')
      btn.childNodes[0].textContent = 'Read more '
    } else {
      detail.style.maxHeight = detail.scrollHeight + 'px'
      detail.classList.add('open')
      btn.setAttribute('aria-expanded', 'true')
      btn.childNodes[0].textContent = 'Read less '
    }
  })
})

// =========================================
// STAT COUNTER ANIMATION
// =========================================
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats()
      statObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.3 })

const statsBar = document.querySelector('.stats-bar')
if (statsBar) statObserver.observe(statsBar)

function animateStats() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseFloat(el.dataset.target)
    const isDecimal = target % 1 !== 0
    const duration = 1200
    const start = performance.now()

    function update(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target

      el.textContent = isDecimal ? current.toFixed(1) : Math.round(current)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  })
}

// =========================================
// ACTIVE NAV LINK
// =========================================
const sections = document.querySelectorAll('.section, .hero')
const navLinksAll = document.querySelectorAll('.nav-links a')

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id
      navLinksAll.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
      })
    }
  })
}, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' })

sections.forEach(s => activeObserver.observe(s))
