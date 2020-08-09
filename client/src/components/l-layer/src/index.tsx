import './index.scss';
import {scroll} from "@/utils/window";
function click(e:any){
    const isRoot = e.target.dataset.src==='root';
    if(isRoot){
      const {listeners:{close}} = this;
      close&&close()
      Promise.resolve().then(()=>scroll.show())
    }
}
export default {
   functional:true,
   name:'l-layer',
   
   render(h:any,ctx:any){
      const slot = ctx.slots().default;
      const {data:{staticClass='',attrs:{visible = false}}} = ctx;
      visible&&scroll.hidden()
      const className = `l-fixed-cover layer ${staticClass}`;
       return  (
        <div class={className} onClick={click.bind(ctx)} data-src='root'>
           <section class="content">
             {...slot}
           </section>
        </div>
       )
   }
}