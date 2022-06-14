import { ReactComponent as Logo } from '../assets/svgs/logo.svg';
// import  { ReactComponent as SectionBackground } from '../assets/svgs/PolyGrid.svg'
import SectionBackground from '../assets/svgs/PolyGrid.svg'
import MainBackground from '../assets/img/space1.jpg'


export const dappConfig = {
    title: "Pixel Invaderz",
    logo: <Logo/>,
    mainBackground: `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.3)), url(${MainBackground})`,
    projectInfoBg: `url(${SectionBackground})`,
    // projectInfoBg: `url(${'../assets/svgs/PolyGrid.svg'})`,

}

// unrevealed
// ipfs://QmUkuNz8pfFiZnAB6DgdXk3YAuLVZAHUb9yEP97qJbbTPz/
//metadata
// ipfs://QmdbFkEehaeBawyNvRG6UEDNBhMe4m4uobEPwD84jPraYd/
