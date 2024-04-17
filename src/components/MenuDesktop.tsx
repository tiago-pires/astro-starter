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
        slug: "#",
      },
      {
        label: "Link Two",
        title: "Link Two",
        slug: "#",
      },
      {
        label: "Link Three",
        title: "Link Three",
        slug: "#",
      },
      {
        label: "Link Four",
        title: "Link Five",
        slug: "#",
      },
    ],
  },
  {
    label: "Link",
    subItems: [
      {
        label: "Link One",
        title: "Link One",
        slug: "#",
      },
      {
        label: "Link Two",
        title: "Link Two",
        slug: "#",
      },
      {
        label: "Link Three",
        title: "Link Three",
        slug: "#",
      },
    ],
  },
  {
    label: "Top Level",
    title: "Link",
    slug: "#",
  },
];

export default function MenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={crypto.randomUUID()}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 xs:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {item.banner && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={item.slug}
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
                          <li key={crypto.randomUUID()}>
                            <a href={subItem.slug} title={subItem.title}>
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
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
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
