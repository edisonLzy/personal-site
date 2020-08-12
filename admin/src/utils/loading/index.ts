import { Loading } from 'element-ui';
// import { ElLoadingComponent } from 'element-ui/types/loading';
export const Spin: {
    option: any,
    i:{close:()=>void},
    start: () => void,
    close: () => void
} = {
    option: { text: 'loading' },
    i:{close:()=>{}},
    start() {
        this.i = (Loading.service(this.option) as any);
    },
    close() {
        // if (this.i instanceof ElLoadingComponent) {
            this.i.close()
        // }
    }
}