import * as React from "react"

const Mail = (props) => {
  return (
    <svg viewBox="1 1 600 600" style={{width:'5rem'}} {...props}>
      <g transform="translate(-5.667 -6408.081) scale(6.66667)">
        <linearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1={-110.934}
          y1={1129.751}
          x2={-110.35}
          y2={1720.099}
          gradientTransform="matrix(1 0 0 -1 156.89 2180.75)"
        >
          <stop offset={0} stopColor="#70efff" />
          <stop offset={1} stopColor="#5770ff" />
        </linearGradient>
        <path
          d="M21.653 961.362h48.695a20.608 20.608 0 0120.653 20.653v48.695a20.608 20.608 0 01-20.653 20.653H21.653A20.608 20.608 0 011 1030.71v-48.695a20.608 20.608 0 0120.653-20.653z"
          fill="url(#prefix__a)"
        />
        <path
          d="M20.719 986.956c-.474 0-.921.082-1.344.25l8.469 8.719 8.563 8.875.156.188.25.25.25.25.5.531 7.344 7.531c.122.076.477.404.754.543.357.178.743.343 1.141.357.43.015.869-.108 1.256-.296.29-.141.419-.343.755-.603l8.5-8.781 8.594-8.844 8.281-8.531a3.635 3.635 0 00-1.75-.438H20.719zm-2.594 1.062c-.903.856-1.469 2.142-1.469 3.594v28.625c0 1.175.377 2.243 1 3.062l1.187-1.125 8.844-8.594 7.844-7.594-.156-.187-8.594-8.844-8.594-8.875-.062-.062zm57.188.282l-8.375 8.656-8.563 8.844-.156.156 8.156 7.906 8.844 8.594.531.5c.476-.764.75-1.705.75-2.719v-28.625c0-1.294-.448-2.468-1.187-3.312zm-38.782 18.718l-7.812 7.594-8.875 8.594-1.125 1.094c.593.382 1.268.625 2 .625h51.719c.88 0 1.678-.338 2.344-.875l-.562-.562-8.875-8.594-8.156-7.875-7.344 7.562c-.397.264-.663.556-1.051.735-.625.289-1.309.533-1.997.523-.69-.011-1.367-.281-1.986-.585-.311-.153-.477-.305-.841-.61l-7.439-7.626z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

export default Mail