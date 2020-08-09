import "./userInfo.scss";
export default {
    functional:true,
    render(h:any,ctx:any){
        const {props:{item:{i,p}}} = ctx;
        return <section class="l-flex user-i">
            <l-icon 
                title={p}
                iconClass={p}> 
            </l-icon>
          
            <i class="info">
                {i}
            </i>
        </section>;
    }
};