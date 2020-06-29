package egovframework.waf.taglib.html;

import java.util.List;
import java.util.Map;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.cmmn.util.CommonUtil;
import egovframework.waf.taglib.DefaultTagSupport;
import egovframework.waf.taglib.HtmlConstants;

/**
 * 코드정보에서 체크박스를 만들어냄
 * @author vary
 *
 */
public class CheckBoxTag extends DefaultTagSupport {

	/**
     *
     */
    private static final long serialVersionUID = 1000411748866418955L;
    private String name;
	private String value;
	private String text;
	private String script;
	private String checkedValue;
	private String space;

    private String columnSize = "100";

    @SuppressWarnings("rawtypes")
	private List list;

    private String id;

	protected final Logger logger = LoggerFactory.getLogger(this.getClass());


	public int doStartTag() throws JspException {
		return (SKIP_BODY);
	}


	@SuppressWarnings("rawtypes")
	public int doEndTag() throws JspException {
		try {
		String[] checkedValues = null;
		if(checkedValue != null) {
		    checkedValues = CommonUtil.toStringArray(getParsedValue(checkedValue), HtmlConstants.DELIMITER);
		}
        String[] values = null;
        String[] texts = null;

        if (list != null) {
            String[] tValues = null;
            String[] tTexts = null;
            if (value != null) {
                tValues = (value != null) ? CommonUtil.toStringArray(value, DELIMITER) : null;
                tTexts = (text != null) ? CommonUtil.toStringArray(text, DELIMITER) : tValues;
            }
            int fSize = tValues != null ? tValues.length : 0;

            int size = list.size() + fSize;
            values = new String[size];
            texts = new String[size];

            if (fSize > 0) {
                for (int i = 0; i < fSize; i++) {
                    values[i] = tValues[i];
                    texts[i] = tTexts[i];
                }
            }

            Object data = null;
            Object valueObj = null;
            Object nameObj = null;
            for (int i = 0; i < list.size(); i++) {
                data = (Object)list.get(i);
           		valueObj = ((Map)data).get("VALUE");
           		nameObj = ((Map)data).get("NAME");
                values[i+fSize] = (valueObj != null) ? String.valueOf(valueObj) : null;
                texts[i+fSize] = (nameObj != null) ? String.valueOf(nameObj) : null;
            }

        } else {
            values = (value != null) ? CommonUtil.toStringArray(value, DELIMITER) : null;
            texts = (text != null) ? CommonUtil.toStringArray(text, DELIMITER) : values;
        }
		JspWriter out = super.pageContext.getOut();
		CheckBox checkBox = new CheckBox(name, id, values, texts, script, checkedValues, space, columnSize);
		out.println(checkBox.buildHtml());
		} catch (Exception e) {
			logger.error("", e);
		}
		return (SKIP_BODY);
	}


    /**
     * @param checkedValue The checkedValue to set.
     */
    public void setCheckedValue(String checkedValue) {
        this.checkedValue = checkedValue;
    }

    /**
     * @param list The list to set.
     */
    @SuppressWarnings("rawtypes")
	public void setList(List list) {
    	this.list = list;
    }


    /**
     * @param name The name to set.
     */
    public void setName(String name) {
        this.name = name;
    }


    /**
     * @param script The script to set.
     */
    public void setScript(String script) {
        this.script = script;
    }


    /**
     * @param space The space to set.
     */
    public void setSpace(String space) {
        this.space = space;
    }


    /**
     * @param text The text to set.
     */
    public void setText(String text) {
        this.text = text;
    }


    /**
     * @param value The value to set.
     */
    public void setValue(String value) {
        this.value = value;
    }


    /**
     * @param columnSize The columnSize to set.
     */
    public void setColumnSize(String columnSize) {
        this.columnSize = columnSize;
    }

    /**
     * @param id The list to set.
     */
	public void setId(String id) {
		this.id = id;
	}

}
