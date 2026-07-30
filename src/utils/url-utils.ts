import I18nKey from "@i18n/i18nKey";
import { i18n, normalizeLang } from "@i18n/translation";
import { siteConfig } from "@/config";

export function pathsEqual(path1: string, path2: string) {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join("/");
	return joined.replace(/\/+/g, "/");
}

function normalizePath(path: string): string {
	if (!path || path.trim() === "") return "/";
	return path.startsWith("/") ? path : `/${path}`;
}

export function getLocaleFromPathname(pathname: string): string {
	return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh_CN";
}

export function stripLocalePrefix(pathname: string): string {
	if (pathname === "/en") return "/";
	if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
	return pathname;
}

export function routeUrl(path: string, lang?: string): string {
	const normalizedPath = normalizePath(path);
	const locale = normalizeLang(lang ?? siteConfig.lang);
	if (locale === "en") {
		return joinUrl("", import.meta.env.BASE_URL, "en", normalizedPath);
	}
	return joinUrl("", import.meta.env.BASE_URL, normalizedPath);
}

export function switchLocalePath(pathname: string, targetLang: string): string {
	return routeUrl(stripLocalePrefix(pathname), targetLang);
}

export function getPostUrlBySlug(slug: string, lang?: string): string {
	return routeUrl(`/posts/${slug}/`, lang);
}

export function getTagUrl(tag: string, lang?: string): string {
	if (!tag) return routeUrl("/archive/", lang);
	return routeUrl(`/archive/?tag=${encodeURIComponent(tag.trim())}`, lang);
}

export function getCategoryUrl(category: string | null, lang?: string): string {
	if (
		!category ||
		category.trim() === "" ||
		category.trim().toLowerCase() === i18n(I18nKey.uncategorized, lang).toLowerCase()
	)
		return routeUrl("/archive/?uncategorized=true", lang);
	return routeUrl(`/archive/?category=${encodeURIComponent(category.trim())}`, lang);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/");
	if (lastSlashIndex < 0) {
		return "/";
	}
	return path.substring(0, lastSlashIndex + 1);
}

export function url(path: string) {
	return joinUrl("", import.meta.env.BASE_URL, normalizePath(path));
}
