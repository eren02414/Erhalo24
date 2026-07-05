/* ==========================================================================
   ERHALO24 — SON VİDEOLAR
   Bu dosyayı güncellemek için sadece aşağıdaki FEEDS listesini düzenle.
   Yeni video/short/reel paylaştıkça ilgili ID veya linki buraya yapıştır,
   sayfa otomatik olarak günceller. Boş bırakılan alanlar "bağlantı
   bekleniyor" kutusu olarak gösterilir.
   ========================================================================== */

const FEEDS = [
  {
    platform: 'YouTube',
    kind: 'youtube',
    label: 'Son Video',
    // https://www.youtube.com/watch?v=XXXXXXXXXXX  ->  sadece "XXXXXXXXXXX" kısmını yapıştır
    videoId: '',
    caption: 'En son yüklenen ana video',
    profileUrl: 'https://www.youtube.com/@scpslerhalo24',
    profileLabel: 'Kanala Git ↗'
  },
  {
    platform: 'YouTube',
    kind: 'youtube',
    label: 'Son Short',
    videoId: '',
    caption: 'En son yüklenen YouTube Short',
    profileUrl: 'https://www.youtube.com/@scpslerhalo24/shorts',
    profileLabel: 'Shorts Sekmesine Git ↗'
  },
  {
    platform: 'Instagram',
    kind: 'instagram',
    label: 'Son Gönderi',
    // tam gönderi linkini yapıştır, örn: https://www.instagram.com/p/XXXXXXXXXXX/
    postUrl: '',
    caption: 'En son Instagram gönderisi',
    profileUrl: '',
    profileLabel: 'Profile Git ↗'
  },
  {
    platform: 'Instagram',
    kind: 'instagram',
    label: 'Son Reels',
    postUrl: '',
    caption: 'En son Instagram Reels',
    profileUrl: '',
    profileLabel: 'Profile Git ↗'
  },
  {
    platform: 'TikTok',
    kind: 'tiktok',
    label: 'Son Video',
    // tam video linkini yapıştır, örn: https://www.tiktok.com/@kullanici/video/XXXXXXXXXXX
    videoUrl: '',
    caption: 'En son TikTok videosu',
    profileUrl: '',
    profileLabel: 'Profile Git ↗'
  }
];

const ICONS = {
  YouTube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.94-2.36-1C17.06 2.5 12 2.5 12 2.5h-.01s-5.06 0-8.19.34c-.46.06-1.46.06-2.36 1-.71.72-.94 2.36-.94 2.36S0 8.13 0 10.06v1.78c0 1.93.23 3.87.23 3.87s.23 1.64.94 2.36c.9.94 2.08.9 2.6 1.01 1.89.18 8.03.34 8.03.34s5.06-.01 8.19-.35c.46-.06 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.23-1.93.23-3.87v-1.78c0-1.93-.23-3.86-.23-3.86zM9.55 14.34V7.66l6.27 3.34-6.27 3.34z"/></svg>',
  Instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.25.06 2.1.25 2.85.55.77.3 1.42.7 2.07 1.35.65.65 1.05 1.3 1.35 2.07.3.75.5 1.6.55 2.85.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.25-.25 2.1-.55 2.85-.3.77-.7 1.42-1.35 2.07-.65.65-1.3 1.05-2.07 1.35-.75.3-1.6.5-2.85.55-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.25-.06-2.1-.25-2.85-.55-.77-.3-1.42-.7-2.07-1.35-.65-.65-1.05-1.3-1.35-2.07-.3-.75-.5-1.6-.55-2.85C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.25.25-2.1.55-2.85.3-.77.7-1.42 1.35-2.07.65-.65 1.3-1.05 2.07-1.35.75-.3 1.6-.5 2.85-.55C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.74.07-1.02.05-1.58.22-1.95.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.93-.36 1.95-.06 1.24-.07 1.6-.07 4.74s0 3.5.07 4.74c.05 1.02.22 1.58.36 1.95.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.93.31 1.95.36 1.24.06 1.6.07 4.74.07s3.5 0 4.74-.07c1.02-.05 1.58-.22 1.95-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.93.36-1.95.06-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.05-1.02-.22-1.58-.36-1.95-.19-.49-.42-.84-.79-1.2-.36-.37-.71-.6-1.2-.79-.37-.14-.93-.31-1.95-.36C15.5 4 15.14 4 12 4zm0 3.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm0 1.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zm5.24-2.02a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/></svg>',
  TikTok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.16v14.06c0 1.7-1.38 3.08-3.08 3.08a3.08 3.08 0 0 1 0-6.16c.34 0 .66.05.97.15V10.1a6.24 6.24 0 0 0-.97-.08 6.24 6.24 0 1 0 6.24 6.24V9.4a8.9 8.9 0 0 0 5.2 1.66V7.9a5.7 5.7 0 0 1-3.8-2.08z"/></svg>'
};

const EMPTY_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M8 9.5h8M8 13h5"/></svg>';

function buildScreenInner(feed){
  if(feed.kind === 'youtube' && feed.videoId){
    return `<iframe src="https://www.youtube.com/embed/${feed.videoId}" title="${feed.platform} ${feed.label}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  }
  if(feed.kind === 'instagram' && feed.postUrl){
    return `<blockquote class="instagram-media" data-instgrm-permalink="${feed.postUrl}" data-instgrm-version="14" style="margin:0;width:100%;height:100%;"></blockquote>`;
  }
  if(feed.kind === 'tiktok' && feed.videoUrl){
    return `<blockquote class="tiktok-embed" cite="${feed.videoUrl}" style="margin:0;width:100%;height:100%;"><section></section></blockquote>`;
  }
  return `<div class="placeholder">${EMPTY_SVG}<span>BAĞLANTI BEKLENİYOR<br>videos.js içinden ekle</span></div>`;
}

function renderFeeds(){
  const grid = document.getElementById('feed-grid');
  if(!grid) return;

  grid.innerHTML = FEEDS.map(feed => {
    const hasContent =
      (feed.kind === 'youtube' && feed.videoId) ||
      (feed.kind === 'instagram' && feed.postUrl) ||
      (feed.kind === 'tiktok' && feed.videoUrl);

    const profileButton = feed.profileUrl
      ? `<a class="btn btn--ghost" href="${feed.profileUrl}" target="_blank" rel="noopener">${feed.profileLabel}</a>`
      : `<span class="btn btn--ghost" aria-disabled="true">Profil Bekleniyor</span>`;

    return `
      <article class="monitor">
        <div class="monitor__head">
          <div class="platform">${ICONS[feed.platform]}<b>${feed.platform}</b></div>
          <div class="monitor__live">${hasContent ? '● YAYINDA' : '○ KAYIT YOK'}</div>
        </div>
        <div class="monitor__screen">${buildScreenInner(feed)}</div>
        <div class="monitor__foot">
          <div class="caption"><b>${feed.label}</b>${feed.caption}</div>
          ${profileButton}
        </div>
      </article>
    `;
  }).join('');

  // gömülü içerik varsa platformların embed script'lerini yükle
  if(FEEDS.some(f => f.kind === 'instagram' && f.postUrl)) loadScriptOnce('https://www.instagram.com/embed.js');
  if(FEEDS.some(f => f.kind === 'tiktok' && f.videoUrl)) loadScriptOnce('https://www.tiktok.com/embed.js');
}

function loadScriptOnce(src){
  if(document.querySelector(`script[src="${src}"]`)){
    // script zaten yüklüyse embed'leri yeniden işle
    if(src.includes('instagram') && window.instgrm) window.instgrm.Embeds.process();
    return;
  }
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

document.addEventListener('DOMContentLoaded', renderFeeds);
