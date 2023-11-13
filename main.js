import data from './data.json' assert { type: 'json' }

const bargroup = document.querySelector('.bargroup')
const days = []

data.forEach(d => {
   days.push(d['day'])
   const bargraph = document.createElement('div')
   const barcontainer = document.createElement('div')
   const bar = document.createElement('div')
   const p = document.createElement('p')
   const toolTip = document.createElement('p')

   bargraph.classList.add('bargraph')
   barcontainer.classList.add('barcontainer')
   bar.classList.add('bar')
   p.textContent = d['day']

   toolTip.textContent = `$${d['amount']}`

   if (p.textContent === days[new Date().getDay() - 1]) {
     bar.classList.add('current')
   } else {
     bar.classList.remove('current')
   }

   bar.style.minHeight = `${d['amount'] * 1.5}%`

   toolTip.classList.add('tooltip-hide')

   toolTip.style.transform = `translateY(-20px)`

   bar.addEventListener('mouseover', showToolTip)
   bar.addEventListener('mouseleave', removeToolTip)

   function showToolTip() {
     bar.style.cursor = 'grab'
     toolTip.classList.add('tooltip-show')
     toolTip.classList.remove('tooltip-hide')
   }

   function removeToolTip() {
     bar.style.cursor = 'pointer'
     toolTip.classList.remove('tooltip-show')
     toolTip.classList.add('tooltip-hide')
   }

   bar.appendChild(toolTip)
   barcontainer.appendChild(bar)
   bargraph.appendChild(barcontainer)
   bargraph.appendChild(p)

   bargroup.appendChild(bargraph)
   
})