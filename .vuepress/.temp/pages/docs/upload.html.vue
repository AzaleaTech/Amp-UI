<template><h1 id="upload-上传" tabindex="-1"><a class="header-anchor" href="#upload-上传" aria-hidden="true">#</a> Upload 上传</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>从本地相册选择图片(视频)或使用相机拍照(拍摄视频)</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>基础用法</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>上传图片
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-upload-image</span> <span class="token attr-name">imgs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ imgs }}<span class="token punctuation">"</span></span> <span class="token attr-name">limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 2 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-upload-image</span><span class="token punctuation">></span></span>

上传视频
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-upload-video</span> <span class="token attr-name">videos</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ videos }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-upload-video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<h4 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h4>
<p>参考<a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html" target="_blank" rel="noopener noreferrer"><code>wx.chooseImage</code><OutboundLink/></a>微信文档</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>imgs</td>
<td>图片列表</td>
<td>Array[string]</td>
<td>[]</td>
<td>是</td>
</tr>
<tr>
<td>width</td>
<td>每张图片宽度, 单位[<code>rpx</code>]</td>
<td>number</td>
<td>140</td>
<td>否</td>
</tr>
<tr>
<td>height</td>
<td>每张图片高度, 单位[<code>rpx</code>]</td>
<td>number</td>
<td>140</td>
<td>否</td>
</tr>
<tr>
<td>sourceType</td>
<td>图片来源</td>
<td>Array[string]</td>
<td>['album', 'camera']</td>
<td>否</td>
</tr>
<tr>
<td>count</td>
<td>最多可以选择的图片张数, 开启裁剪默认 count 为 1</td>
<td>number</td>
<td>9</td>
<td>否</td>
</tr>
<tr>
<td>sizeType</td>
<td>所选的图片的尺寸</td>
<td>Array[string]</td>
<td>['original', 'compressed']</td>
<td>否</td>
</tr>
<tr>
<td>limit</td>
<td>限制图片上传数量, 默认无限制</td>
<td>number</td>
<td>-1</td>
<td>否</td>
</tr>
<tr>
<td>size</td>
<td>上传图片的最大大小, 默认无限制, 单位[<code>MB</code>]</td>
<td>number</td>
<td>-1</td>
<td>否</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>否</td>
</tr>
<tr>
<td>isCropped</td>
<td>是否需要裁剪图片</td>
<td>boolean</td>
<td>false</td>
<td>否</td>
</tr>
</tbody>
</table>
<h4 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频</h4>
<p>参考<a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html" target="_blank" rel="noopener noreferrer"><code>wx.chooseVideo</code><OutboundLink/></a>微信文档</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>videos</td>
<td>视频列表</td>
<td>Array[string]</td>
<td>[]</td>
<td>是</td>
</tr>
<tr>
<td>width</td>
<td>视频宽度, 单位[<code>rpx</code>]</td>
<td>number</td>
<td>200</td>
<td>否</td>
</tr>
<tr>
<td>height</td>
<td>视频高度, 单位[<code>rpx</code>]</td>
<td>number</td>
<td>180</td>
<td>否</td>
</tr>
<tr>
<td>sourceType</td>
<td>视频来源</td>
<td>Array[string]</td>
<td>['album', 'camera']</td>
<td>否</td>
</tr>
<tr>
<td>maxDuration</td>
<td>拍摄视频最长拍摄时间，单位[<code>秒</code>]</td>
<td>number</td>
<td>60</td>
<td>否</td>
</tr>
<tr>
<td>compressed</td>
<td>是否压缩所选择的视频文件</td>
<td>boolean</td>
<td>false</td>
<td>否</td>
</tr>
<tr>
<td>camera</td>
<td>默认拉起的是前置或者后置摄像头</td>
<td>string</td>
<td>'back'</td>
<td>否</td>
</tr>
<tr>
<td>limit</td>
<td>限制视频上传数量, 默认无限制</td>
<td>number</td>
<td>-1</td>
<td>否</td>
</tr>
<tr>
<td>size</td>
<td>上传视频的最大大小, 默认无限制, 单位[<code>MB</code>]</td>
<td>number</td>
<td>-1</td>
<td>否</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>否</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<h4 id="图片-1" tabindex="-1"><a class="header-anchor" href="#图片-1" aria-hidden="true">#</a> 图片</h4>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>图片上传或移除对应的回调</td>
<td>e</td>
</tr>
</tbody>
</table>
<h4 id="视频-1" tabindex="-1"><a class="header-anchor" href="#视频-1" aria-hidden="true">#</a> 视频</h4>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>视频上传或移除对应的回调</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
