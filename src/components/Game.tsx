import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import triangle from '../assets/images/bg-triangle.svg'
import { Icon } from './Icon'
import { colors } from '../utils/constants'

export function Game(){
    return(
        <div className="relative w-4/5 h-[17.4rem] bg-50% bg-center bg-no-repeat" style={{backgroundImage: `url(${triangle})`}}>
            <Icon icon={paper} from={colors.paperGradientFrom} to={colors.paperGradientTo} />
            <Icon icon={scissors} from={colors.scissorsGradientFrom} to={colors.scissorsGradientTo}/>
            <Icon icon={rock} from={colors.rockGradientFrom} to={colors.rockGradientTo}/>
        </div>
    )
}//