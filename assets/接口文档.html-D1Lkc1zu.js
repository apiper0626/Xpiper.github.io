import{_ as s,c as e,o as n,a as i}from"./app-keFXRlWq.js";const a={},l=i(`<h1 id="接口文档" tabindex="-1"><a class="header-anchor" href="#接口文档"><span>接口文档</span></a></h1><h2 id="_1、上传文档" tabindex="-1"><a class="header-anchor" href="#_1、上传文档"><span>1、上传文档</span></a></h2><p><strong>接口URL</strong>：<a href="http://116.204.85.243:8981/files_upload" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8981/files_upload</a></p><p><strong>请求方式</strong>：POST</p><p><strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&quot;https://img1.aepic.net/img/test.md&quot;{</span>
<span class="line">    &quot;files_title_url&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;url&quot;: &quot;https://img1.aepic.net/img/test.pdf&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;pdf&quot;,</span>
<span class="line">            &quot;id&quot;:&quot;1234556&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;url&quot;: &quot;https://img1.aepic.net/img/test.txt&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;txt&quot;,</span>
<span class="line">            &quot;id&quot;:&quot;1234556&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;url&quot;: &quot;https://img1.aepic.net/img/test.docx&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;docx&quot;,</span>
<span class="line">            &quot;id&quot;:&quot;1234556&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;url&quot;: &quot;https://img1.aepic.net/img/test.md&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;md&quot;,</span>
<span class="line">            &quot;id&quot;:&quot;1234556&quot;</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明**：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>title</td><td>&quot;文档&quot;</td><td>str</td><td>是</td><td>文档标题</td></tr><tr><td>url</td><td>&quot;https://img1.aepic.net/img/test.md&quot;</td><td>str</td><td>是</td><td>文档地址</td></tr></tbody></table><p><strong>成功响应示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{&quot;code&quot;: 200, &quot;message&quot;: &quot;上传成功&quot;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回处理状态</p><h2 id="_2、删除向量" tabindex="-1"><a class="header-anchor" href="#_2、删除向量"><span>2、删除向量</span></a></h2><p>**接口 **：<a href="http://116.204.85.243:8981/documents/delete_by_filters" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8981/documents/delete_by_filters</a></p><p><strong>请求方式</strong>：post</p><p><strong>请求示例：</strong></p><ul><li>删除某文件对应的所有向量</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {&quot;name&quot;:&quot;test.txt&quot;},</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==<em>name代表了要删除的文档对应的所有向量</em>==</p><p>或者使用id删除对应的文件对应的所有向量</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {&quot;id&quot;:&quot;123456&quot;},</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果要删除文档中某一个向量</li></ul><p>参数：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: </span>
<span class="line">              {</span>
<span class="line">              &quot;name&quot;:&quot;test.txt&quot;</span>
<span class="line">              &quot;vector_id&quot;: &quot;50cc0525fb2c407dbb7db60b2c7061f8&quot;</span>
<span class="line">              },</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用id对应文件中某一个向量id</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: </span>
<span class="line">              {</span>
<span class="line">              &quot;id&quot;:&quot;123456&quot;</span>
<span class="line">              &quot;vector_id&quot;: &quot;50cc0525fb2c407dbb7db60b2c7061f8&quot;</span>
<span class="line">              },</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：如果不填，会删除整个向量库</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {},</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index为向量库名称，需要指定，默认值为“dureader_robust_query_encoder”，即文本信息对应的向量库。如果不写index参数，则会默认操作“dureader_robust_query_encoder”（文本信息对应的向量库）。文档信息对应的向量库为“env_samples”。</p><h3 id="例如" tabindex="-1"><a class="header-anchor" href="#例如"><span>例如：</span></a></h3><ul><li>删除某文本id对应的所有向量</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {&quot;id&quot;:&quot;123456&quot;}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：如果不填，会删除整个文本向量库</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、获取知识库中向量" tabindex="-1"><a class="header-anchor" href="#_3、获取知识库中向量"><span>3、获取知识库中向量</span></a></h2><p>接口：<a href="http://116.204.85.243:8981/documents/get_by_filters" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8981/documents/get_by_filters</a></p><p>请求方式：post</p><p>请求示例：</p><ul><li>获取所有知识</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {},</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取某文件知识</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {&quot;name&quot;:&quot;test.txt&quot;},</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><u>==name值为文件名==</u></em></p><p>或者使用文件id获取所有文件对应的向量知识</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {&quot;id&quot;:&quot;123456&quot;},</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取某向量知识</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: </span>
<span class="line">              {</span>
<span class="line">              &quot;name&quot;:&quot;test.txt&quot;,</span>
<span class="line">              &quot;vector_id&quot;: &quot;50cc0525fb2c407dbb7db60b2c7061f8&quot;</span>
<span class="line">              },</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用文件id和向量id获取向量知识</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: </span>
<span class="line">              {</span>
<span class="line">              &quot;id&quot;:&quot;123456&quot;,</span>
<span class="line">              &quot;vector_id&quot;: &quot;50cc0525fb2c407dbb7db60b2c7061f8&quot;</span>
<span class="line">              },</span>
<span class="line">    &quot;index&quot;:&quot;env_samples&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==index为向量库名称，需要指定，默认值为“dureader_robust_query_encoder”，即文本信息对应的向量库。如果不写index参数，则会默认操作“dureader_robust_query_encoder”（文本信息对应的向量库）。文档信息对应的向量库为“env_samples”。==</p><h3 id="例如-1" tabindex="-1"><a class="header-anchor" href="#例如-1"><span>例如：</span></a></h3><ul><li>获取某文本id对应的所有向量</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {&quot;id&quot;:&quot;123456&quot;}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：如果不填，会获取整个文本向量库</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;filters&quot;: {}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),t=[l];function d(u,r){return n(),e("div",null,t)}const c=s(a,[["render",d],["__file","接口文档.html.vue"]]),o=JSON.parse('{"path":"/api/dhs/%E6%95%B0%E9%93%BEAI%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8/%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3.html","title":"接口文档","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、上传文档","slug":"_1、上传文档","link":"#_1、上传文档","children":[]},{"level":2,"title":"2、删除向量","slug":"_2、删除向量","link":"#_2、删除向量","children":[{"level":3,"title":"例如：","slug":"例如","link":"#例如","children":[]}]},{"level":2,"title":"3、获取知识库中向量","slug":"_3、获取知识库中向量","link":"#_3、获取知识库中向量","children":[{"level":3,"title":"例如：","slug":"例如-1","link":"#例如-1","children":[]}]}],"git":{"updatedTime":1740969829000,"contributors":[{"name":"apiper","email":"47816635+Xpiper@users.noreply.github.com","commits":1}]},"filePathRelative":"api/dhs/数链AI接口调用/接口文档.md"}');export{c as comp,o as data};
