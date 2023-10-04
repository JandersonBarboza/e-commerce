import { Breadcrumb, MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FakeDB as dataDB } from "../../database/FakeDB";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

interface NavigationProps {
    pageName: string;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items = dataDB.categories.map((e) => {

    if (!e.subId) {
        return getItem(<Link to={`${e.page}/?id=${e.id}`}>{e.label}</Link>, e.id, "", dataDB.categories.map((sub) => { if (sub.subId && sub.subId == e.id) { return getItem(<Link to={`${sub.page}/?id=${sub.id}`}>{sub.label}</Link>, sub.id, "") } else { return null } }).filter((e) => e !== undefined));
    }

}).filter((e) => e !== undefined) as ItemType[];

export function Navigation(props: NavigationProps) {
    return (
        <>
            <Breadcrumb
                items={[
                    {
                        href: '',
                        title: (
                            <Link to="/"><HomeOutlined /></Link>
                        )
                    },
                    {
                        title: "Produtos",
                        menu: { items }
                    },
                    {
                        title: (
                            <span style={{ color: "#ffab00" }}>{props.pageName}</span>
                        )
                    },
                ]}
            />
        </>
    )
}