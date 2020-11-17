import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const Spin: {
    option: any,
    i:{close:()=>void},
    start: () => void,
    close: () => void
} = {
	option: { text: 'loading' },
	i:{close:()=>null},
	start() {
		NProgress.start();
	},
	close() {
		NProgress.done();
	}
};