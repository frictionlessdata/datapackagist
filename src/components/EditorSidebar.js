const React = require('react')
const { EditorButtons } = require('./EditorButtons')
const { EditorMetadata } = require('./EditorMetadata')
const { EditorKeywords } = require('./EditorKeywords')

export function EditorSidebar({ descriptor, publicDescriptor }) {
  return (
    <section className="package">
      <div className="inner">
        <div className="start">
          {/* Logo */}
          <a className="logo">
            <span className="fd">
              <svg>
                <use xlinkHref="#icon-f" />
              </svg>
            </span>

            <svg
              width="100%"
              height="100%"
              viewBox="0 0 264 69"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: '1.41421',
              }}
            >
              <path
                style={{ fill: 'white' }}
                d="M0,47.776C0,45.32 0.457,42.892 1.372,40.493C2.286,38.094 3.619,35.949 5.371,34.06C7.122,32.171 9.263,30.641 11.792,29.469C14.322,28.298 17.202,27.712 20.432,27.712C24.246,27.712 27.545,28.525 30.328,30.149C33.11,31.774 35.183,33.89 36.545,36.497L30.357,40.635C29.812,39.501 29.15,38.547 28.372,37.772C27.593,36.998 26.757,36.384 25.862,35.93C24.966,35.477 24.032,35.146 23.059,34.939C22.086,34.731 21.133,34.627 20.199,34.627C18.175,34.627 16.414,35.024 14.916,35.817C13.417,36.611 12.172,37.64 11.179,38.906C10.187,40.172 9.438,41.608 8.932,43.214C8.426,44.819 8.173,46.416 8.173,48.003C8.173,49.779 8.465,51.489 9.049,53.132C9.632,54.776 10.459,56.221 11.53,57.468C12.6,58.715 13.884,59.716 15.383,60.472C16.881,61.228 18.525,61.606 20.316,61.606C21.25,61.606 22.223,61.492 23.235,61.266C24.246,61.039 25.21,60.68 26.124,60.189C27.039,59.697 27.885,59.065 28.664,58.29C29.442,57.515 30.065,56.58 30.532,55.484L37.129,59.168C36.467,60.68 35.523,62.012 34.297,63.164C33.071,64.317 31.69,65.29 30.152,66.083C28.615,66.877 26.971,67.481 25.219,67.897C23.468,68.312 21.756,68.52 20.082,68.52C17.124,68.52 14.419,67.916 11.968,66.707C9.516,65.497 7.404,63.92 5.634,61.974C3.863,60.028 2.481,57.818 1.489,55.343C0.496,52.868 0,50.346 0,47.776ZM203.682,68.464C200.646,68.464 197.893,67.887 195.421,66.735C192.95,65.582 190.829,64.052 189.058,62.144C187.287,60.236 185.915,58.054 184.943,55.598C183.97,53.142 183.483,50.629 183.483,48.06C183.483,45.377 183.999,42.807 185.03,40.351C186.061,37.895 187.482,35.723 189.292,33.833C191.101,31.944 193.252,30.442 195.743,29.327C198.233,28.213 200.938,27.655 203.857,27.655C206.854,27.655 209.588,28.251 212.059,29.441C214.531,30.631 216.642,32.19 218.393,34.117C220.145,36.044 221.507,38.235 222.48,40.691C223.453,43.147 223.939,45.641 223.939,48.173C223.939,50.856 223.433,53.416 222.421,55.853C221.41,58.29 220.008,60.444 218.218,62.314C216.428,64.184 214.287,65.677 211.797,66.792C209.306,67.906 206.601,68.464 203.682,68.464ZM110.16,68.18L81.379,68.18L81.379,27.939L109.634,27.939L109.634,34.797L89.436,34.797L89.436,44.489L106.891,44.489L106.891,50.837L89.436,50.837L89.436,61.322L110.16,61.322L110.16,68.18ZM50.614,68.18L42.558,68.18L42.558,27.939L60.889,27.939C62.796,27.939 64.557,28.326 66.172,29.101C67.787,29.875 69.178,30.896 70.346,32.161C71.513,33.427 72.428,34.863 73.09,36.469C73.751,38.075 74.082,39.69 74.082,41.315C74.082,43.922 73.411,46.293 72.068,48.428C70.725,50.563 68.906,52.103 66.61,53.047L76.067,68.18L67.018,68.18L58.553,54.691L50.614,54.691L50.614,68.18ZM238.184,68.18L230.127,68.18L230.127,27.939L248.458,27.939C250.365,27.939 252.126,28.326 253.741,29.101C255.357,29.875 256.748,30.896 257.915,32.161C259.083,33.427 259.998,34.863 260.659,36.469C261.321,38.075 261.652,39.69 261.652,41.315C261.652,43.922 260.98,46.293 259.638,48.428C258.295,50.563 256.475,52.103 254.179,53.047L263.637,68.18L254.588,68.18L246.123,54.691L238.184,54.691L238.184,68.18ZM169.475,68.18L161.477,68.18L161.477,34.797L148.225,34.797L148.225,27.939L182.726,27.939L182.726,34.797L169.475,34.797L169.475,68.18ZM151.141,68.18L142.852,68.18L138.999,58.148L124.521,58.148L120.726,68.18L112.437,68.18L128.257,27.939L135.379,27.939L151.141,68.18ZM191.656,48.06C191.656,49.798 191.928,51.479 192.473,53.104C193.018,54.729 193.806,56.165 194.838,57.411C195.869,58.658 197.134,59.66 198.632,60.415C200.131,61.171 201.833,61.549 203.74,61.549C205.686,61.549 207.408,61.162 208.907,60.387C210.405,59.612 211.67,58.583 212.701,57.298C213.733,56.013 214.511,54.568 215.037,52.962C215.562,51.356 215.825,49.722 215.825,48.06C215.825,46.321 215.542,44.64 214.978,43.015C214.414,41.39 213.616,39.955 212.585,38.708C211.553,37.461 210.288,36.469 208.79,35.732C207.292,34.995 205.608,34.627 203.74,34.627C201.794,34.627 200.063,35.014 198.545,35.789C197.027,36.563 195.762,37.584 194.75,38.849C193.738,40.115 192.97,41.551 192.444,43.157C191.919,44.763 191.656,46.397 191.656,48.06ZM137.539,52.65L131.818,36.837L125.864,52.65L137.539,52.65ZM50.614,47.833L60.713,47.833C61.453,47.833 62.144,47.663 62.786,47.323C63.428,46.983 63.983,46.52 64.45,45.934C64.917,45.348 65.286,44.659 65.559,43.865C65.831,43.072 65.968,42.222 65.968,41.315C65.968,40.37 65.812,39.501 65.5,38.708C65.189,37.914 64.771,37.225 64.245,36.639C63.72,36.053 63.117,35.6 62.436,35.279C61.755,34.957 61.064,34.797 60.363,34.797L50.614,34.797L50.614,47.833ZM238.184,47.833L248.283,47.833C249.022,47.833 249.713,47.663 250.355,47.323C250.998,46.983 251.552,46.52 252.019,45.934C252.486,45.348 252.856,44.659 253.128,43.865C253.401,43.072 253.537,42.222 253.537,41.315C253.537,40.37 253.381,39.501 253.07,38.708C252.759,37.914 252.34,37.225 251.815,36.639C251.289,36.053 250.686,35.6 250.005,35.279C249.324,34.957 248.633,34.797 247.933,34.797L238.184,34.797L238.184,47.833Z"
              />
              <path
                style={{ fill: 'white' }}
                d="M110.609,9.432C110.609,8.298 110.819,7.169 111.238,6.044C111.658,4.919 112.274,3.91 113.085,3.015C113.897,2.121 114.887,1.399 116.055,0.85C117.222,0.301 118.545,0.027 120.022,0.027C121.792,0.027 123.306,0.407 124.565,1.169C125.824,1.931 126.772,2.922 127.411,4.145L125.003,5.712C124.729,5.145 124.401,4.667 124.018,4.277C123.635,3.888 123.215,3.578 122.759,3.348C122.303,3.117 121.829,2.953 121.336,2.856C120.843,2.759 120.369,2.71 119.913,2.71C118.891,2.71 117.997,2.909 117.231,3.308C116.465,3.706 115.822,4.233 115.302,4.888C114.782,5.544 114.39,6.279 114.125,7.094C113.861,7.908 113.729,8.723 113.729,9.538C113.729,10.459 113.884,11.336 114.194,12.168C114.504,13.001 114.937,13.736 115.494,14.373C116.05,15.011 116.711,15.52 117.478,15.901C118.244,16.282 119.083,16.472 119.995,16.472C120.469,16.472 120.957,16.414 121.459,16.299C121.961,16.184 122.444,15.998 122.909,15.741C123.375,15.485 123.803,15.161 124.196,14.772C124.588,14.382 124.912,13.913 125.167,13.364L127.712,14.772C127.402,15.48 126.964,16.105 126.398,16.645C125.833,17.185 125.194,17.641 124.483,18.013C123.771,18.385 123.019,18.668 122.225,18.863C121.432,19.058 120.652,19.155 119.886,19.155C118.517,19.155 117.268,18.872 116.137,18.305C115.006,17.738 114.03,16.999 113.209,16.087C112.388,15.175 111.749,14.138 111.293,12.978C110.837,11.818 110.609,10.636 110.609,9.432ZM182.572,18.996L180,18.996L180,16.658C178.358,18.305 176.47,19.129 174.335,19.129C173.04,19.129 171.836,18.868 170.723,18.345C169.61,17.823 168.643,17.119 167.822,16.233C167.001,15.347 166.358,14.32 165.893,13.151C165.428,11.982 165.195,10.76 165.195,9.485C165.195,8.209 165.428,6.996 165.893,5.845C166.358,4.694 167.001,3.684 167.822,2.816C168.643,1.948 169.619,1.262 170.75,0.757C171.881,0.252 173.113,0 174.445,0C176.305,0 177.865,0.376 179.124,1.129C180.383,1.882 181.331,2.878 181.97,4.118L179.616,5.765C179.087,4.738 178.358,3.967 177.427,3.454C176.497,2.94 175.475,2.683 174.362,2.683C173.45,2.683 172.62,2.874 171.872,3.255C171.124,3.635 170.486,4.14 169.957,4.769C169.428,5.398 169.022,6.128 168.739,6.961C168.456,7.793 168.315,8.661 168.315,9.564C168.315,10.521 168.474,11.415 168.794,12.248C169.113,13.08 169.551,13.806 170.107,14.426C170.664,15.046 171.325,15.538 172.091,15.901C172.857,16.264 173.687,16.445 174.581,16.445C175.566,16.445 176.511,16.224 177.414,15.781C178.317,15.338 179.179,14.639 180,13.682L180,11.663L175.922,11.663L175.922,9.458L182.572,9.458L182.572,18.996ZM10.159,18.996L3.263,18.996L3.263,0.133L10.159,0.133C11.728,0.133 13.1,0.381 14.277,0.877C15.454,1.373 16.439,2.046 17.233,2.896C18.026,3.746 18.624,4.742 19.025,5.885C19.426,7.027 19.627,8.245 19.627,9.538C19.627,10.973 19.404,12.27 18.957,13.43C18.51,14.59 17.876,15.582 17.055,16.406C16.234,17.229 15.24,17.867 14.072,18.319C12.904,18.77 11.6,18.996 10.159,18.996ZM199.401,18.996L186.075,18.996L186.075,0.133L199.155,0.133L199.155,2.763L189.139,2.763L189.139,8.13L197.814,8.13L197.814,10.601L189.139,10.601L189.139,16.366L199.401,16.366L199.401,18.996ZM81.272,18.996L78.207,18.996L78.207,0.133L86.362,0.133C87.238,0.133 88.045,0.31 88.784,0.664C89.523,1.018 90.156,1.483 90.686,2.059C91.215,2.635 91.63,3.29 91.931,4.025C92.232,4.76 92.382,5.508 92.382,6.27C92.382,7.067 92.241,7.833 91.958,8.568C91.675,9.303 91.278,9.958 90.768,10.534C90.257,11.11 89.641,11.57 88.92,11.916C88.2,12.261 87.402,12.434 86.526,12.434L81.272,12.434L81.272,18.996ZM46.602,18.996L43.51,18.996L43.51,2.763L37.025,2.763L37.025,0.133L53.06,0.133L53.06,2.763L46.602,2.763L46.602,18.996ZM133.623,18.996L130.558,18.996L130.558,0.159L133.623,0.159L133.623,9.857L142.763,0.133L146.156,0.133L138.494,8.475L146.594,18.996L143.173,18.996L136.606,10.308L133.623,13.31L133.623,18.996ZM164.682,18.996L161.453,18.996L159.4,13.868L151.903,13.868L149.878,18.996L146.621,18.996L154.338,0.133L157.02,0.133L164.682,18.996ZM69.864,18.996L66.634,18.996L64.582,13.868L57.084,13.868L55.059,18.996L51.803,18.996L59.52,0.133L62.201,0.133L69.864,18.996ZM38.255,18.996L35.026,18.996L32.974,13.868L25.476,13.868L23.451,18.996L20.194,18.996L27.911,0.133L30.593,0.133L38.255,18.996ZM110.123,18.996L106.894,18.996L104.842,13.868L97.344,13.868L95.319,18.996L92.062,18.996L99.779,0.133L102.461,0.133L110.123,18.996ZM16.507,9.538C16.507,8.546 16.366,7.634 16.083,6.801C15.8,5.969 15.385,5.256 14.838,4.663C14.291,4.069 13.625,3.604 12.841,3.268C12.056,2.931 11.162,2.763 10.159,2.763L6.328,2.763L6.328,16.366L10.159,16.366C11.18,16.366 12.088,16.193 12.882,15.848C13.675,15.502 14.341,15.024 14.879,14.413C15.417,13.802 15.823,13.08 16.097,12.248C16.371,11.415 16.507,10.512 16.507,9.538ZM158.798,11.663L155.679,3.56L152.45,11.663L158.798,11.663ZM63.98,11.663L60.86,3.56L57.631,11.663L63.98,11.663ZM32.372,11.663L29.252,3.56L26.023,11.663L32.372,11.663ZM104.24,11.663L101.12,3.56L97.891,11.663L104.24,11.663ZM81.272,9.804L86.335,9.804C86.772,9.804 87.169,9.715 87.525,9.538C87.881,9.361 88.186,9.113 88.442,8.794C88.697,8.475 88.898,8.103 89.044,7.678C89.19,7.253 89.263,6.784 89.263,6.27C89.263,5.739 89.18,5.26 89.016,4.835C88.852,4.41 88.624,4.043 88.332,3.733C88.04,3.423 87.707,3.184 87.333,3.015C86.959,2.847 86.572,2.763 86.17,2.763L81.272,2.763L81.272,9.804Z"
              />
            </svg>
          </a>

          <EditorButtons descriptor={descriptor} publicDescriptor={publicDescriptor} />
        </div>

        <div className="panel-group" id="package-data" role="tablist" aria-multiselectable="true">
          {/* Metadata */}
          <EditorMetadata descriptor={descriptor} />

          {/* Keywords */}
          <EditorKeywords keywords={descriptor.keywords} />
        </div>
      </div>
    </section>
  )
}
