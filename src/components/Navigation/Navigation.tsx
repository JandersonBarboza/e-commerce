import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export function Navigation() {
    return (
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <HomeOutlined />,
                },
                {
                    href: '',
                    title: (
                        <>
                            <UserOutlined />
                            <span>Application List</span>
                        </>
                    ),
                },
                {
                    title: 'Application',
                },
            ]}
        />
    )
}