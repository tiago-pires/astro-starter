import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const items = [
  {
    label: "Link",
    banner: {
      title: "Boom!",
      excerpt:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    subItems: [
      {
        label: "Link One",
        title: "Link One",
        url: "#",
      },
      {
        label: "Link Two",
        title: "Link Two",
        url: "#",
      },
      {
        label: "Link Three",
        title: "Link Three",
        url: "#",
      },
      {
        label: "Link Four",
        title: "Link Five",
        url: "#",
      },
    ],
  },
  {
    label: "Link",
    subItems: [
      {
        label: "Link One",
        title: "Link One",
        url: "#",
      },
      {
        label: "Link Two",
        title: "Link Two",
        url: "#",
      },
      {
        label: "Link Three",
        title: "Link Three",
        url: "#",
      },
    ],
  },
  {
    label: "Top Level",
    title: "Link",
    url: "#",
  },
];

export default function MenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="left-auto right-0">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {item.banner && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {item.banner.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.banner.excerpt}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    )}
                    <li>
                      <ul>
                        {item.subItems.map((subItem) => (
                          <li>
                            <a href={subItem.url} title={subItem.title}>
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <a href="#">Documentation</a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuViewport className="right-0" />
    </NavigationMenu>
  );
}
