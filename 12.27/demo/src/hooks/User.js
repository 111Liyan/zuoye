import { reactive,onMounted, onBeforeUnmount} from "vue";
export default function user(){
    let point =reactive({
        x:0,
        y:0
    })
    const save=(event)=>{
        point.x=event.pageX
        point.y=event.pageY
    }
    onMounted(()=>{
        window.addEventListener('click',save)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',save)
    })
    return point
}