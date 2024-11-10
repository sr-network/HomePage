<template>
	<header class="flex flex-col justify-between gap-6 md:flex-row">
		<div class="space-y-3">
			<NuxtImg
				loading="lazy"
				decoding="async"
				class="rounded-full shadow"
				width="96"
				height="96"
				src="https://library.gxres.net/images/icons/avatar.webp"
				alt="Restent's avatar"
			/>
			<hgroup>
				<h1 class="text-2xl font-medium">Restent Ou</h1>
				<p class="text-sm text-gray-700 dark:text-gray-300">a.k.a. SliverRiver & undefinedR2</p>
			</hgroup>
		</div>
		<div class="flex items-center">
			<ul class="text-sm space-y-3">
				<li class="flex items-center gap-2">
					<IconLocation />
					<span>Guangxi, China</span>
				</li>
				<li class="flex items-center gap-2">
					<IconLanguage />
					<span>English / Chinese</span>
				</li>
				<li class="flex items-center gap-2">
					<IconLink />
					<span>
						<NuxtLink href="https://blog.gxres.net" external>Blog</NuxtLink>
						/
						<NuxtLink href="https://library.gxres.net" external>Library</NuxtLink>
						/
						<NuxtLink href="https://slirv.vip" external>Lab</NuxtLink>
					</span>
				</li>
				<li class="flex items-center gap-2">
					<IconContactPage />
					<NuxtLink href="https://library.gxres.net/social/for-contact" external
						>Contact me →</NuxtLink
					>
				</li>
			</ul>
		</div>
	</header>
</template>
