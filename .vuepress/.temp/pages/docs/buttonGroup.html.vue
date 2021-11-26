<template><h1 id="button-group-按钮组" tabindex="-1"><a class="header-anchor" href="#button-group-按钮组" aria-hidden="true">#</a> Button-group 按钮组</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>自定义按钮组</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>默认按钮组
&lt;a-button-group>
  &lt;a-button>left&lt;/a-button>
  &lt;a-button>right&lt;/a-button>
&lt;/a-button-group>

整体按钮组
&lt;a-button-group entire>
  &lt;a-button>left&lt;/a-button>
  &lt;a-button>right&lt;/a-button>
&lt;/a-button-group>

按钮组内按钮尺寸
&lt;a-button-group size="large">
  &lt;a-button>large1&lt;/a-button>
&lt;/a-button-group>
&lt;a-button-group size="default">
  &lt;a-button>default1&lt;/a-button>
  &lt;a-button>default2&lt;/a-button>
  &lt;a-button>default3&lt;/a-button>
&lt;/a-button-group>
&lt;a-button-group size="small">
  &lt;a-button>small1&lt;/a-button>
  &lt;a-button>small2&lt;/a-button>
&lt;/a-button-group>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>必填</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td>设置按钮组内按钮的 size</td>
<td>否</td>
<td>string</td>
<td>default</td>
<td>large、default、small</td>
</tr>
<tr>
<td>entire</td>
<td>设置按钮组为一个整体按钮(当且仅当按钮数量为 2 时生效)</td>
<td>否</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
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
<td>暂无</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
