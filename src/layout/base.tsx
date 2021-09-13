import "./style.scss";
import Header from "components/header";
import Footer from "components/footer";
export default function LayoutBase(props: any) {
    return (
        <>
            <Header />
            <div className="main">{props.children}</div>
            <Footer />

        </>
    );
}