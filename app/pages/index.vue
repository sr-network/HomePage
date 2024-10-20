<template>
	<section>
		<h2>Loading...</h2>
		<p>We are now detecting your browser language and will navigate to the right place.</p>
		<p>
			If you have not navigated for a long time, use the language switcher above to switch manually.
		</p>
		<p>我们正在检测您的浏览器语言，稍后会将您导航到正确的地方。</p>
		<p>若长时间未导航，请使用上方的语言切换器手动切换。</p>
	</section>
</template>

<script setup lang="ts">
const { $userLanguage } = useNuxtApp();
const zhCode = ['zh-CN', 'zh-TW', 'zh-HK'];
onMounted(() => {
	if (zhCode.includes($userLanguage)) {
		navigateTo('/zh');
	} else {
		navigateTo('/en');
	}
});
</script>
