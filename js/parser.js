// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var arrows, code, keywords, new_text, tags, text;
    code = $('#main-code');
    text = code[0].innerText;
    keywords = new RegExp('scripts|styles|metas|each|as', "g");
    tags = new RegExp('html|section|main', "g");
    arrows = new RegExp('->|=>|~>', "g");
    new_text = text.replace(tags, '<span class="syntax-tag">html</span>').replace(keywords, '<span class="syntax-keyword">keyword</span>').replace(arrow, '<span class="syntax-arrow"></span>').replace(attr, '<span class="syntax-attr"></span>').replace(vars, '<span class="syntax-attr"></span>').replace(strings, '<span class="syntax-string"></span>');
    return code[0].innerHTML = new_text;
  });

}).call(this);
