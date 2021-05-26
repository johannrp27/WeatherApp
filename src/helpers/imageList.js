import Sleet from './../assets/Sleet.svg'
import Hail from './../assets/Hail.svg'
import Thunderstorm from './../assets/Thunderstorm.svg'
import HeavyRain from './../assets/HeavyRain.svg'
import LightRain from './../assets/LightRain.svg'
import Showers from './../assets/Showers.svg'
import HeavyCloud from './../assets/HeavyCloud.svg'
import LightCloud from './../assets/LightCloud.svg'
import Clear from './../assets/Clear.svg'
import Snow from './../assets/Snow.svg'

export const getWeatherImg = (abbr) => {
  const images = {
    sn: Snow,
    sl: Sleet,
    h: Hail,
    t: Thunderstorm,
    hr: HeavyRain,
    lr: LightRain,
    s: Showers,
    hc: HeavyCloud,
    lc: LightCloud,
    c: Clear
  }
  return images[abbr]
}
