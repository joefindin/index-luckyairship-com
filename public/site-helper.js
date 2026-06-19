/**
 * public/site-helper.js
 * 页面提示卡片、关键词徽章与访问说明展示
 * 无第三方依赖
 */

(function() {
  'use strict';

  // 配置数据（含 URL 与关键词）
  var config = {
    siteUrl: 'https://index-luckyairship.com',
    keyword: '幸运飞艇',
    badgeTexts: ['热门', '推荐', '最新', '精选']
  };

  // 创建主容器
  var container = document.createElement('div');
  container.id = 'site-helper-container';
  container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;font-family:Arial,sans-serif;max-width:320px;';

  // 卡片 - 访问说明
  var card = document.createElement('div');
  card.style.cssText = 'background:#fff;border:1px solid #e0e0e0;border-radius:12px;padding:16px;box-shadow:0 4px 12px rgba(0,0,0,0.1);margin-bottom:12px;';

  var title = document.createElement('div');
  title.textContent = '访问提示';
  title.style.cssText = 'font-weight:bold;font-size:16px;margin-bottom:8px;color:#333;';

  var desc = document.createElement('p');
  desc.textContent = '欢迎访问 ' + config.siteUrl + '，这里提供' + config.keyword + '相关数据与资讯。';
  desc.style.cssText = 'font-size:13px;color:#555;line-height:1.5;margin:0 0 10px;';

  var link = document.createElement('a');
  link.href = config.siteUrl;
  link.target = '_blank';
  link.textContent = '前往站点 →';
  link.style.cssText = 'display:inline-block;background:#1a73e8;color:#fff;padding:6px 14px;border-radius:6px;text-decoration:none;font-size:13px;';

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(link);

  // 徽章区域
  var badgeWrapper = document.createElement('div');
  badgeWrapper.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;';

  config.badgeTexts.forEach(function(text) {
    var badge = document.createElement('span');
    badge.textContent = text + ' ' + config.keyword;
    badge.style.cssText = 'background:#e8f0fe;color:#1a73e8;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:500;';
    badgeWrapper.appendChild(badge);
  });

  card.appendChild(badgeWrapper);

  // 折叠按钮
  var toggleBtn = document.createElement('button');
  toggleBtn.textContent = '收起';
  toggleBtn.style.cssText = 'display:block;margin-top:12px;background:transparent;border:1px solid #ccc;border-radius:6px;padding:4px 12px;font-size:12px;cursor:pointer;color:#666;';

  var expanded = true;
  toggleBtn.addEventListener('click', function() {
    expanded = !expanded;
    card.style.display = expanded ? 'block' : 'none';
    toggleBtn.textContent = expanded ? '收起' : '展开';
  });

  container.appendChild(card);
  container.appendChild(toggleBtn);

  // 页面加载完成后插入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(container);
    });
  } else {
    document.body.appendChild(container);
  }
})();