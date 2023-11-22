import s from "./Header.module.scss";

function Header() {
    return (
        <div className={s.header}>
            <h3 className={s.header_h3}>Keeper</h3>
        </div>
    );
}
export default Header;