import type { CollectionEntry } from "astro:content"

type Props = {
    entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
pill?: boolean
}

export default function FooterProjects({entry, pill}: Props) {
    return (
    <a href={`/${entry.collection}/${entry.slug}`} class="group flex items-center">
    <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
        {pill &&
        <div class="text-sm capitalize px-2 py-0.5">
            {entry.collection === "blog" ? "post" : "project"}
        </div>
        }
        </div>
        <div class="mt-3 text-black dark:text-white">
        {entry.data.title}
        </div>
    </div>
    </a>
)
}