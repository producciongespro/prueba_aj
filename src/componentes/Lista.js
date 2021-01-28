export default function Lista (props) {

    return (
            <ul>
                {
                    props.array.map((item, i)=>(
                        <li key={i}  >  {item}  </li>
                    ) )
                }
            </ul>
        
    )
    
}